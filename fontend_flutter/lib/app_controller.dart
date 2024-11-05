import 'package:flutter/material.dart';
import 'default_settings.dart';

class AppController extends ChangeNotifier {
  bool contrastMode = DefaultSettings.contrastMode;
  double fontSize = DefaultSettings.fontSize;
  double lineHeight = DefaultSettings.lineHeight;
  int fontSizeCounter = DefaultSettings.fontSizeCounter;
  int lineHeightCounter = DefaultSettings.lineHeightCounter;
  String startNode = DefaultSettings.startNode;
  String endNode = DefaultSettings.endNode;
  bool isValidInput = DefaultSettings.isValidInput;
  String errorMessage = DefaultSettings.errorMessage;

  void toggleContrast() {
    contrastMode = !contrastMode;
    notifyListeners();
  }

  void increaseFontSize() {
    if (fontSizeCounter < 5) {
      fontSize += 4;
      fontSizeCounter++;
      notifyListeners();
    }
  }

  void decreaseFontSize() {
    if (fontSizeCounter > 0) {
      fontSize -= 4;
      fontSizeCounter--;
      notifyListeners();
    }
  }

  void increaseLineHeight() {
    if (lineHeightCounter < 5) {
      lineHeight += 0.2;
      lineHeightCounter++;
      notifyListeners();
    }
  }

  void decreaseLineHeight() {
    if (lineHeightCounter > 0) {
      lineHeight -= 0.2;
      lineHeightCounter--;
      notifyListeners();
    }
  }

  void resetSettings() {
    contrastMode = DefaultSettings.contrastMode;
    fontSize = DefaultSettings.fontSize;
    lineHeight = DefaultSettings.lineHeight;
    fontSizeCounter = DefaultSettings.fontSizeCounter;
    lineHeightCounter = DefaultSettings.lineHeightCounter;
    startNode = DefaultSettings.startNode;
    endNode = DefaultSettings.endNode;
    isValidInput = DefaultSettings.isValidInput;
    errorMessage = DefaultSettings.errorMessage;
    notifyListeners();
  }

  void validateInput() {
    bool startIsValid = DefaultSettings.validNodes.contains(startNode);
    bool endIsValid = DefaultSettings.validNodes.contains(endNode);

    if (startNode.isEmpty || endNode.isEmpty) {
      isValidInput = false;
      errorMessage = 'Bitte geben Sie sowohl Start- als auch Endknoten ein.';
    } else if (!startIsValid || !endIsValid) {
      isValidInput = false;
      errorMessage = 'Einer oder beide der eingegebenen Knoten sind ungültig.';
    } else {
      isValidInput = true;
      errorMessage = '';
    }

    notifyListeners();
  }

  void handleFindPath(BuildContext context) {
    if (isValidInput) {
      Navigator.pushNamed(context, '/app2', arguments: {
        'startNode': startNode,
        'endNode': endNode,
      });
    } else {
      errorMessage = "Input is not valid: $errorMessage";
      notifyListeners();
    }
  }
}
