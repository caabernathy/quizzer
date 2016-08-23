/**
 * @flow
 */

'use strict';

import QuizData from './quizzes';

function getCategories(): Array<{id:number,name:string}> {
  var categories = [];
  QuizData.map((category) => {
    categories.push({
      id: category.id,
      name: category.name
    })
  })
  return categories;
}

function getCategory(
  categoryId: number
): ?{id:number,name:string,subcategories:any} {
  const category = QuizData.find((category) => category.id === categoryId);
  if (typeof category === "undefined") {
    return null;
  }
  return category;
}

function getSubcategories(categoryId: number): ?Array<any> {
  const category = getCategory(categoryId);
  if (category) {
    return category.subcategories;
  }
  return null;
}

function getSubcategory(categoryId: number, subcategoryId: number): ?any {
  const subcategories = getSubcategories(categoryId);
  if (subcategories) {
    const subcategory = subcategories.find((subcategory) => {
      return subcategory.id === subcategoryId;
    })
    if (subcategory) {
      return subcategory;
    }
  }
  return null;
}

function getQuestions(categoryId: number, subcategoryId: number): ?Array<any> {
  const subcategory = getSubcategory(categoryId, subcategoryId);
  if (subcategory) {
    return subcategory.questions;
  }
  return null;
}

function getQuestion(
  categoryId: number,
  subcategoryId: number,
  questionId: number
): ?any {
  const questions = getQuestions(categoryId, subcategoryId);
  if (questions) {
    const question = questions.find((question) => question.id === questionId);
    if (question) {
      return question;
    }
  }
  return null;
}

function getNextUnansweredQuestion(
  questions: any,
  questionId: number,
  results: Array<{number:boolean}>
): ?any {
  var nextQuestion = null;
  questions.some((question) => {
    if (question.id !== questionId && !(question.id in results)) {
      nextQuestion = question;
      return true;
    }
  });
  return nextQuestion;
}

function getScore(
  categoryId: number,
  subcategoryId: number,
  results: Array<{number:boolean}>
): ?{correct:number,total:number} {
  const questions = getQuestions(categoryId, subcategoryId);
  var total = 0;
  var correct = 0;
  if (questions) {
    total = questions.length;
    questions.forEach((question) => {
      if (question.id in results && results[question.id]) {
        correct++;
      }
    })
  }
  return {
    correct: correct,
    total: total,
  }
}

exports.getCategories = getCategories;
exports.getCategory = getCategory;
exports.getSubcategories = getSubcategories;
exports.getSubcategory = getSubcategory;
exports.getQuestions = getQuestions;
exports.getQuestion = getQuestion;
exports.getNextUnansweredQuestion = getNextUnansweredQuestion;
exports.getScore = getScore;
