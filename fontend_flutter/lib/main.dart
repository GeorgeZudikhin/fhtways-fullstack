import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'app_controller.dart';
import 'style.dart';
import 'secondPage.dart';
import 'default_settings.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => AppController(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Pathfinding for All',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MainApp(),
      routes: {
        '/app2': (context) => Secondpage(),
      },
    );
  }
}

class MainApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Consumer<AppController>(
        builder: (context, appController, child) {
          return Container(
            color: appController.contrastMode ? Colors.black : Colors.white,
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Image.asset(
                      '/assets/app_logo.jpg', 
                      height: 50, 
                    ),
                    Image.asset(
                      '/assets/fhtw_logo.svg.png', 
                      height: 50, 
                    ),
                    Row(
                      children: [
                        dynamicIconButton(
                          icon: Icons.text_increase,
                          onPressed: () => appController.increaseFontSize(),
                          appController: appController,
                        ),
                        dynamicIconButton(
                          icon: Icons.text_decrease,
                          onPressed: () => appController.decreaseFontSize(),
                          appController: appController,
                        ),
                        dynamicIconButton(
                          icon: Icons.contrast,
                          onPressed: () => appController.toggleContrast(),
                          appController: appController,
                        ),
                        dynamicIconButton(
                          icon: Icons.line_weight,
                          onPressed: () => appController.increaseLineHeight(),
                          appController: appController,
                        ),
                        dynamicIconButton(
                          icon: Icons.line_style,
                          onPressed: () => appController.decreaseLineHeight(),
                          appController: appController,
                        ),
                        dynamicIconButton(
                          icon: Icons.refresh,
                          onPressed: () => appController.resetSettings(),
                          appController: appController,
                        ),
                      ],
                    ),
                  ],
                ),

                const SizedBox(height: 20),
                Text(
                  'Pathfinding for all - Enter your route and explore FHTW',
                  style:
                      dynamicTextStyle(appController).copyWith(fontSize: 50.0),
                  textAlign: TextAlign.center,
                ),
                styledContainer(
                  widthFactor: 0.7,
                  child: Text(
                    'Mit FHTWays können Sie durch die FHTW navigieren! Geben Sie Ihren Startpunkt und Ihr Ziel in das vorgesehene Format ein: [Gebäude][Stockwerk]Punkt[Raum]. Beispiel: F4.24 für Gebäude F, 4. Stockwerk, Raum 24. Klicken Sie auf den Los-Button oder drücken Sie die Enter-Taste, um Ihre Routenanfrage zu starten und folgen Sie den detaillierten Wegbeschreibungen!',
                    style: dynamicTextStyle(appController),
                    textAlign: TextAlign.justify,
                  ),
                ),
                const SizedBox(height: 20),
                styledTextFieldContainer(
                  hintText: 'Startpunkt',
                  appController: appController,
                  onChanged: (value) {
                    appController.startNode = value.toUpperCase();
                    appController.validateInput();
                  },
                ),
                const SizedBox(height: 10),
                styledTextFieldContainer(
                  hintText: 'Ziel',
                  appController: appController,
                  onChanged: (value) {
                    appController.endNode = value.toUpperCase();
                    appController.validateInput();
                  },
                ),
                const SizedBox(height: 20),
                Align(
                  alignment: Alignment.center,
                  child: Container(
                    width: MediaQuery.of(context).size.width * 0.4,
                    child: dynamicElevatedButton(
                      context: context,
                      appController: appController,
                      label: 'Los!',
                      onPressed: appController.startNode.isNotEmpty &&
                              appController.endNode.isNotEmpty &&
                              DefaultSettings.validNodes
                                  .contains(appController.startNode) &&
                              DefaultSettings.validNodes
                                  .contains(appController.endNode)
                          ? () => appController.handleFindPath(context)
                          : null,
                    ),
                  ),
                ),
                if (appController.errorMessage.isNotEmpty)
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      appController.errorMessage,
                      style: const TextStyle(color: Colors.red),
                      textAlign: TextAlign.center,
                    ),
                  ),
                const SizedBox(height: 20),
                styledContainer(
                  widthFactor: 0.6,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Text(
                        '*Mit "TOILETTE" und "AUFZUG" können Sie direkt zu den nächstliegenden Herren-, Damen-, Diverstoiletten bzw. Aufzügen navigieren',
                        style: dynamicTextStyle(appController),
                        textAlign: TextAlign.justify,
                      ),
                      const SizedBox(height: 10),
                      Text(
                        '*Für den Eingang ins Gebäude bzw. in den Stockwerk verwenden Sie einfach die Buchstabe des jeweiligen Gebäudes bzw. Stockwerkes, z.B. F4 für den Stockwerk',
                        style: dynamicTextStyle(appController),
                        textAlign: TextAlign.justify,
                      ),
                      const SizedBox(height: 10),
                      Text(
                        'Barrierefreiheit-Tastenkombinationen: "+" Vergrößert die Schrift, "-" Verkleinert die Schrift, "c" Ändert den Kontrast, "d" Setzt den Kontrast zurück, "z" Erhöht den Zeilenabstand, "t" Setzt den Zeilenabstand zurück, "r" Setzt alles zurück.',
                        style: dynamicTextStyle(appController),
                        textAlign: TextAlign.justify,
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
