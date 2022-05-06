import { Injectable } from '@angular/core';
@Injectable()
export class StringUtilService {

  toUppercaseText = function (textToModify: string) {
    return textToModify.toUpperCase()
  }

  toLowercaseText = function (textToModify: string) {
    return textToModify.toLowerCase()
  }

  concatenateTexts = function (textOne, textTwo) {
    return textOne + textTwo;
  }
}