import 'package:flutter/material.dart';
import 'app_controller.dart'; 

TextStyle dynamicTextStyle(AppController appController) {
  return TextStyle(
    fontSize: appController.fontSize,
    color: appController.contrastMode ? Colors.white : Colors.black,
    height: appController.lineHeight,
  );
}

IconButton dynamicIconButton({
  required IconData icon,
  required VoidCallback onPressed,
  required AppController appController,
  double size = 35.0,
}) {
  return IconButton(
    icon: Icon(icon),
    iconSize: size,
    onPressed: onPressed,
    color: appController.contrastMode ? Colors.white : Colors.black,
  );
}

TextField dynamicTextField({
  required String hintText,
  required AppController appController,
  required Function(String) onChanged,
}) {
  return TextField(
    decoration: InputDecoration(
      hintText: hintText,
      fillColor: appController.contrastMode
          ? const Color.fromARGB(255, 126, 151, 232)
          : Colors.white,
      filled: true,
      contentPadding: const EdgeInsets.symmetric(vertical: 10.0, horizontal: 15.0), 
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(30.0), 
        borderSide: const BorderSide(
          color:Colors.blue, 
          width: 2.0,
        ),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(30.0), 
        borderSide: const BorderSide(
          color: Colors.blue, 
          width: 2.0,
        ),
      ),
    ),
    onChanged: onChanged,
  );
}

ElevatedButton dynamicElevatedButton({
  required BuildContext context,
  required AppController appController,
  required String label,
  required VoidCallback? onPressed,
}) {
  return ElevatedButton(
    onPressed: onPressed,
    style: ButtonStyle(
      backgroundColor: MaterialStateProperty.resolveWith<Color>(
        (Set<MaterialState> states) {
          if (states.contains(MaterialState.disabled)) {
            return Colors.grey; 
          }
          return Colors.blue; 
        },
      ),
      padding: MaterialStateProperty.all(
        EdgeInsets.symmetric(vertical: 12),
      ), 
    ),
    child: Text(
      label,
      style: TextStyle(fontSize: 16), 
    ),
  );
}


Widget styledContainer({
  required double widthFactor, 
  required Widget child, 
}) {
  return Builder(
    builder: (context) {
      return Center(
        child: Container(
          width: MediaQuery.of(context).size.width * widthFactor,
          padding: EdgeInsets.all(16),
          child: child,
        ),
      );
    },
  );
}

Widget styledTextFieldContainer({
  required String hintText,
  required AppController appController,
  required Function(String) onChanged,
}) {
  return Builder(
    builder: (context) {
      return Align(
        alignment: Alignment.center,
        child: Container(
          width: MediaQuery.of(context).size.width * 0.4,
          child: dynamicTextField(
            hintText: hintText,
            appController: appController,
            onChanged: onChanged,
          ),
        ),
      );
    },
  );
}
