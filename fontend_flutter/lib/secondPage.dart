
import 'package:flutter/material.dart';

class Secondpage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final Map<String, String>? args =
        ModalRoute.of(context)?.settings.arguments as Map<String, String>?;
    return Scaffold(
      appBar: AppBar(
        title: const Text('Path Details'),
      ),
      body: Center(
        child: Text(
          'Start: ${args?['startNode']}, Ziel: ${args?['endNode']}',
          style: const TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}
