// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('phone num works normal 1', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('phone num works normal 2', () => {
  expect(isPhoneNumber("987-654-3210")).toBe(true);
});

test('phone num bad no dashes', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test('phone num bad letters', () => {
  expect(isPhoneNumber("abc-def-ghij")).toBe(false);
});

// email stuff

test('email good gmail', () => {
  expect(isEmail("test@gmail.com")).toBe(true);
});

test('email good yahoo', () => {
  expect(isEmail("hello123@yahoo.com")).toBe(true);
});

test('email bad missing at sign', () => {
  expect(isEmail("testgmail.com")).toBe(false);
});

test('email bad weird dot', () => {
  expect(isEmail("abc@.com")).toBe(false);
});

// password stuff

test('password good one', () => {
  expect(isStrongPassword("Pass1234")).toBe(true);
});

test('password good with underscore', () => {
  expect(isStrongPassword("hello_12")).toBe(true);
});

test('password bad starts with number', () => {
  expect(isStrongPassword("1hello123")).toBe(false);
});

test('password bad has symbol thing', () => {
  expect(isStrongPassword("abc!")).toBe(false);
});

// date stuff

test('date good normal', () => {
  expect(isDate("12/25/2020")).toBe(true);
});

test('date good another one', () => {
  expect(isDate("01/01/1999")).toBe(true);
});

test('date bad with dashes', () => {
  expect(isDate("1-2-2020")).toBe(false);
});

test('date bad just word', () => {
  expect(isDate("hello")).toBe(false);
});

// color stuff

test('hex color good white', () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});

test('hex color good random', () => {
  expect(isHexColor("#123ABC")).toBe(true);
});

test('hex color bad too short 1', () => {
  expect(isHexColor("#12345")).toBe(false);
});

test('hex color bad too short 2', () => {
  expect(isHexColor("#1234")).toBe(false);
});