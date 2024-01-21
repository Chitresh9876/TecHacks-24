import * as pdfjsLib from "pdfjs-dist";
import fs from "fs";

// import axios from "axios"
// import pdf from "pdf-parse"
const currentDate = new Date();
const filePath = "./sample/sample.txt";
// console.log(currentDate)
// console.log(typeof(currentDate))
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate() - 1;
// const month = 11;

const date = `${year}${month < 10 ? "0" + month : month}${
  day < 10 ? "0" + day : day
}`;

const baseUrl = `https://cpcb.nic.in//upload/Downloads/AQI_Bulletin_${date}.pdf`;

const convertPdfUrlToText = async(pdfUrl)=> {
  try {
    // Fetch the PDF file
    const response = await fetch(pdfUrl);
    const arrayBuffer = await response.arrayBuffer();

    // Loading the PDF file from the array buffer
    const pdfDoc = await pdfjsLib.getDocument(arrayBuffer).promise;

    // Array to store text content from all pages
    const textContentArray = [];

    // Loop through each page
    for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
      // Get the text content of the page
      const page = await pdfDoc.getPage(pageNum);
      const textContent = await page.getTextContent();

      // Extract text content from the page
      const pageText = textContent.items.map((item) => item.str).join(" ");
      textContentArray.push(pageText);

      // If you want to do something with the text of each page, you can do it here
      // console.log(Text from Page ${pageNum}:, pageText);
      // console.log(typeof(pageText))
    }

    // When all pages are processed, you can use the combined text content
    const allTextContent = textContentArray.join(" ");
    const parsedData = parseTextContent(allTextContent);
    // console.log(parsedData);

    // console.log(typeof(allTextContent))
    // console.log('All Text Content:', allTextContent);

    fs.writeFileSync(filePath, allTextContent, "utf-8");
    // console.log("saved");

    return allTextContent;
  } catch (error) {
    console.error("Error converting PDF to text:", error);
    return null;
  }
}

// Example usage
const pdfUrl = baseUrl;
convertPdfUrlToText(pdfUrl);

// console.log(baseUrl)

const textContent = fs.readFileSync(filePath, "utf-8");
// console.log(textContent);
const parsedData = parseTextContent(textContent);
// console.log(parsedData);
const jsonData = JSON.stringify(parsedData, null, 2);
const jsonFilePath = "./sample/sample1.json";
fs.writeFileSync(jsonFilePath, jsonData, "utf-8");
// console.log(Conversion completed. JSON saved to ${jsonFilePath});

function parseTextContent(textContent) {
  const lines = textContent.split("\n");

  // Remove any empty lines
  const nonEmptyLines = lines.filter((line) => line.trim() !== "");

  // Assuming the first line contains headers, extract them
  const headers = nonEmptyLines.shift().split("\t"); // Change '\t' to your actual delimiter

  // Initialize an array to store the parsed data
  const parsedData = [];

  // Process each line and create objects
  nonEmptyLines.forEach((line) => {
    const values = line.split("\t"); // Change '\t' to your actual delimiter

    // Create an object with keys from headers and values from the current line
    const dataEntry = {};
    headers.forEach((header, index) => {
      dataEntry[header] = values[index];
    });

    // Add the object to the parsed data array
    parsedData.push(dataEntry);
  });

  return parsedData;
}