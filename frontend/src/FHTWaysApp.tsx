import { useEffect, useState } from "react";
import AccessibilityButtonGroup from "./components/AccessibilityButtonGroup.tsx";
import ErrorMessage from "./components/ErrorMessage.tsx";
import Header from "./components/Header.tsx";
import InputField from "./components/InputField.tsx";
import LogoArea from "./components/LogoArea.tsx";
import LosButton from "./components/LosButton.tsx";
import Paragraph from "./components/Paragraph.tsx";

export default function FHTWaysApp() {
    const [isPathfinding, setIsPathfinding] = useState(false);
    const [pathDescription, setPathDescription] = useState("");
    const [startNode, setStartNode] = useState("");
    const [endNode, setEndNode] = useState("");
    const [isValidInput, setIsValidInput] = useState(false);
    const [isParagraphLarge] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validNodes = [
        "F4",
        "AUFZUG",
        "TOILETTE",
        "F4.27",
        "F4.26",
        "F4.25",
        "F4.24",
        "F4.23",
        "F4.22",
        "F4.20",
        "F4.08",
        "F4.07",
        "F4.06",
        "F4.05",
        "F4.04",
        "F4.03",
        "F4.02",
        "F4.01",
    ];

    // useEffect(() => {
    //     const handleKeyPress = (event: any) => {
    //         if (
    //             event.target.tagName === "INPUT" ||
    //             event.target.tagName === "TEXTAREA"
    //         ) {
    //             return;
    //         }

    //         switch (event.key) {
    //             case "+":
    //                 increaseFontSize();
    //                 break;
    //             case "-":
    //                 decreaseFontSize();
    //                 break;
    //             case "c":
    //                 toggleContrast();
    //                 break;
    //             case "d":
    //                 resetContrast();
    //                 break;
    //             case "z":
    //                 increaseLineHeight();
    //                 break;
    //             case "t":
    //                 resetLineHeight();
    //                 break;
    //             case "r":
    //                 resetAll();
    //                 break;
    //             default:
    //                 break;
    //         }
    //     };

    //     window.addEventListener("keydown", handleKeyPress);

    //     return () => {
    //         window.removeEventListener("keydown", handleKeyPress);
    //     };
    // }, [fontSize, lineHeight]);

    const handleFindPath = async () => {
        console.log("start: ", startNode);
        console.log("end: ", endNode);

        try {
            const response = await fetch(
                "http://localhost:8000/fhtways/find-path/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ startNode, endNode }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setPathDescription(data.path);
            setIsPathfinding(true);
        } catch (error) {
            console.error("Error fetching path data:", error);
        }
    };

    useEffect(() => {
        const startInput = document.getElementById("startInput");
        if (startInput) {
            startInput.focus();
        }
    }, []);

    const handleStartNodeChange = (e: any) => {
        const input = e.target.value.trim().toUpperCase();
        setStartNode(input);
        validateInput(input, endNode);
    };

    const handleEndNodeChange = (e: any) => {
        const input = e.target.value.trim().toUpperCase();
        setEndNode(input);
        validateInput(startNode, input);
    };

    const validateInput = (start: any, end: any) => {
        const isValidFormat =
            /^(AUFZUG|TOILETTE|[A-Z]\d+(\.\d+)?)$/i.test(start) &&
            /^(AUFZUG|TOILETTE|[A-Z]\d+(\.\d+)?)$/i.test(end);
        const isValid =
            validNodes.includes(start) &&
            validNodes.includes(end) &&
            isValidFormat;

        setIsValidInput(isValid);

        // Set error message for invalid format
        if (start.trim() === "" || end.trim() === "") {
            setErrorMessage(
                "Bitte geben Sie sowohl die Anfangs- als auch die Endraumnummer ein."
            );
        } else if (!isValidFormat) {
            setErrorMessage(
                "Ungültiges Eingabeformat! Bitte geben Sie die Zimmernummer im richtigen Format ein."
            );
        } else if (!isValid) {
            setErrorMessage(
                `Ungültige Eingabe! Bitte geben Sie gültige Zimmernummern ein. Zulässige Zimmernummern sind: ${validNodes.join(
                    ", "
                )}`
            );
        } else {
            setErrorMessage(""); // Clear error message if input is valid
        }
    };

    const handleNewSearch = () => {
        setIsPathfinding(false);
        setStartNode("");
        setEndNode("");
        setPathDescription("");
    };

    return (
        <div>
            <AccessibilityButtonGroup />
            <LogoArea />
            <div>
                <Header />
                <div className="my-0 mx-auto w-3/4">
                    {!isPathfinding ? (
                        <>
                            <Paragraph>
                                Mit FHTWays können Sie durch die FHTW
                                navigieren! Geben Sie Ihren Startpunkt und Ihr
                                Ziel in das vorgesehene Format ein:
                                [Gebäude][Stockwerk]'Punkt'[Raum]. Beispiel:
                                F4.24 für Gebäude F, 4. Stockwerk, Raum 24.
                                Klicken Sie auf den "Los"-Button oder drücken
                                Sie die Enter-Taste, um Ihre Routenanfrage zu
                                starten und folgen Sie den detaillierten
                                Wegbeschreibungen!
                            </Paragraph>
                            <div className="flex flex-col items-center mt-5 gap-5">
                                <InputField
                                    id="startInput"
                                    label="Start"
                                    placeholder="Geben Sie Ihren Startpunkt an..."
                                    value={startNode}
                                    onChange={handleStartNodeChange}
                                />
                                <InputField
                                    id="endInput"
                                    label="Ziel"
                                    placeholder="Geben Sie Ihren Endpunkt an..."
                                    value={endNode}
                                    onChange={handleEndNodeChange}
                                />
                                <LosButton
                                    isValid={isValidInput}
                                    onClick={
                                        isValidInput
                                            ? handleFindPath
                                            : () => alert(errorMessage)
                                    }
                                />
                            </div>
                            {!isValidInput && (
                                <ErrorMessage errorMessage={errorMessage} />
                            )}
                            <Paragraph>
                                *mit "TOILETTE" und "AUFZUG" können Sie direkt
                                zu den nächstliegenden Herren-, Damen-,
                                Diverstoiletten bzw. Aufzügen navigieren
                            </Paragraph>
                            <Paragraph>
                                *für den Eingang ins Gebäude bzw. in den
                                Stockwerk verwenden Sie einfach die Buchstabe
                                des jeweiligen Gebäudes bzw. Stockwerkes, z.B.
                                F4 für den Stockwerk
                            </Paragraph>
                            <Paragraph>
                                *Barrierefreiheit-Tastenkombinationen: '+'
                                Vergrößert die Schrift. '-' Verkleinert die
                                Schrift. 'c' Ändert den Kontrast. 'd' Setzt den
                                Kontrast zurück. 'z' Erhöht den Zeilenabstand.
                                't' Setzt den Zeilenabstand zurück. 'r' Setzt
                                alles zurück.
                            </Paragraph>
                        </>
                    ) : (
                        <div className="content-container text-center">
                            <h1 className="text-primary">
                                Pathfinding for All
                            </h1>
                            <h2 className="text-secondary">
                                {startNode} ➡️ {endNode}
                            </h2>
                            <p>{pathDescription}</p>
                            <button
                                onClick={handleNewSearch}
                                className="btn btn-primary"
                            >
                                Neue Suche
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
