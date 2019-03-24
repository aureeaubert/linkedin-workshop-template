const puppeteer = require('puppeteer');
const { URL } = require('url');

const { loginToLinkedIn, writeInFile } = require('./utils');

/**
 * Function to evaluate to return all usernames in the page
 */
const scrapePageProfileUsernamesEvaluator = () => {
  throw new Error("CODE NEEDS TO BE IMPLEMENTED");
};

/**
 * Find all usernames by browsing search pages recursively
 */
const scrapeProfileUsernames = async (
  puppeteerPage,
  searchUrl,
  pageIndex = 1,
  usernamesResults = [],
) => {
  throw new Error("CODE NEEDS TO BE IMPLEMENTED");
};

const run = async () => {
  // Initialize puppeteer
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1000,
      height: 3000,
    },
  });

  if (!process.argv[2] || !process.argv[3]) {
    throw new Error('Missing input params');
  }

  // Script params
  const sessionCookie = process.argv[2];
  const searchUrl = new URL(process.argv[3]);

  // Login to LinkedIn
  await loginToLinkedIn(browser, sessionCookie);

  // Scrape all profile usernames from the given search URL
  const page = await browser.newPage();
  const usernames = await scrapeProfileUsernames(page, searchUrl);

  console.log('Results ->', usernames);

  // Write results in a file
  writeInFile(
    './profile-usernames.json',
    { results: usernames, offset: 0, limit: 100 },
  );

  // Close browser
  await page.close();
  await browser.close();
};

run();
