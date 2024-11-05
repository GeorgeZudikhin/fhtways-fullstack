class DefaultSettings {
  static bool contrastMode = false;
  static double fontSize = 16.0;
  static double lineHeight = 1.5;
  static int fontSizeCounter = 0;
  static int lineHeightCounter = 0;
  static String startNode = '';
  static String endNode = '';
  static bool isValidInput = false;
  static String errorMessage = '';

  static const List<String> validNodes = [
    'F4', 'AUFZUG', 'TOILETTE', 'F4.27', 'F4.26', 'F4.25', 'F4.24', 'F4.23'
  ];
}
