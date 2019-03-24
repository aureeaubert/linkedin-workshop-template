const Promise = require('bluebird');
const puppeteer = require('puppeteer');

const { loginToLinkedIn, readFile, writeInFile } = require('./utils');

/**
 * Function to evaluate to return all profile info
 */
const scrapePageProfileEvaluator = () => {
  throw new Error("CODE NEEDS TO BE IMPLEMENTED");
};

/**
 * Scrape a LinkedIn profile from a given username
 */
const scrapeProfile = async (
  browser,
  username,
) => {
  throw new Error("CODE NEEDS TO BE IMPLEMENTED");
};

/**
 * Scrape all profiles from a list of usernames
 */
const scrapeProfiles = async (
  browser,
  usernames,
) => Promise.map(
  usernames,
  username => scrapeProfile(browser, username),
  { concurrency: 4 },
);

const run = async () => {
  // Initialize puppeteer
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: 1000,
      height: 1000,
    },
  });

  if (!process.argv[2]) {
    throw new Error('Missing input params');
  }

  // Script params
  const sessionCookie = process.argv[2];

  // Read results in a file
  const oldResultsStr = readFile('./profiles.json', 'utf8');
  const usernamesDataStr = readFile('./profile-usernames.json', 'utf8');

  const oldResults = JSON.parse(oldResultsStr || '[]');
  const usernamesData = JSON.parse(usernamesDataStr);
  const usernames = usernamesData.results.slice(
    usernamesData.offset,
    usernamesData.offset + usernamesData.limit,
  );
  usernamesData.offset += usernamesData.limit;

  // Login to LinkedIn
  await loginToLinkedIn(browser, sessionCookie);

  // Scrape all profiles from the given usernames list
  const newResults = await scrapeProfiles(browser, usernames);

  // Write results in a file
  writeInFile('./profiles.json', oldResults.concat(newResults));
  writeInFile('./profile-usernames.json', usernamesData);

  await browser.close();
};

run();
