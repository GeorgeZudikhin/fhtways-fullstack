import aplus from "../assets/aplus.png";
import aminus from "../assets/aminus.png";
import bnw from "../assets/black&white.png";
import farbe from "../assets/farbe.png";
import znormal from "../assets/znormal.png";
import zplus from "../assets/zplus.png";
import returnz from "../assets/return.png";
import sprache from "../assets/sprache.png";
import { useState } from "react";
import AccessibilityButton from "./AccessibilityButton";

export default function AccessibilityButtonGroup() {
    const [contrastMode, setContrastMode] = useState(false);
    const [fontSize, setFontSize] = useState(16); // Initial font size of 16px

    const [lineHeight, setLineHeight] = useState(1.5); // Initial line height
    const [reset] = useState(1.5);
    const [fontSizeCounter, setFontSizeCounter] = useState(0);
    const [lineHeightCounter, setLineHeightCounter] = useState(0);

    const toggleContrast = () => {
        // setContrastMode(!contrastMode);
        // if (!contrastMode) {
        //     document.body.style.backgroundColor = "#000000";
        //     document.body.style.color = "#ffffff";
        //     // Change text color to white for all elements with class 'contrastable-text'
        //     const contrastableTextElements =
        //         document.querySelectorAll(".contrastable-text");
        //     contrastableTextElements.forEach((element) => {
        //         element.style.color = "#ffffff";
        //     });
        // } else {
        //     document.body.style.backgroundColor = "#ffffff";
        //     document.body.style.color = "#000000";
        //     // Reset text color for all elements with class 'contrastable-text'
        //     const contrastableTextElements =
        //         document.querySelectorAll(".contrastable-text");
        //     contrastableTextElements.forEach((element) => {
        //         element.style.color = ""; // Reset to default or your desired color
        //     });
        // }
    };

    const resetContrast = () => {
        // setContrastMode(false);
        // document.body.style.backgroundColor = "#ffffff";
        // document.body.style.color = "#000000";
        // // Reset text color for all elements with class 'contrastable-text'
        // const contrastableTextElements =
        //     document.querySelectorAll(".contrastable-text");
        // contrastableTextElements.forEach((element) => {
        //     element.style.color = ""; // Reset to default or your desired color
        // });
    };

    const increaseFontSize = () => {
        if (fontSizeCounter < 5) {
            setFontSize((fontSize) => fontSize + 4);
            setFontSizeCounter((counter) => counter + 1);
        }
    };

    const decreaseFontSize = () => {
        if (fontSizeCounter > 0) {
            setFontSize((fontSize) => fontSize - 4);
            setFontSizeCounter((counter) => counter - 1);
        }
    };

    //LineHeight
    const increaseLineHeight = () => {
        if (lineHeightCounter < 5) {
            setLineHeight((lineHeight) => lineHeight + 0.2);
            setLineHeightCounter((counter) => counter + 1);
        }
    };
    const resetLineHeight = () => {
        if (lineHeightCounter > 0) {
            setLineHeight((lineHeight) => lineHeight - 0.2);
            setLineHeightCounter((counter) => counter - 1);
        }
    };

    const resetAll = () => {
        // setIsValidInput(true); // Reset input validity when resetting
        // setStartNode("");
        // setEndNode("");
        // setFontSize(16);
        // setFontSizeCounter(0);
        // setLineHeight(1.5);
        // setContrastMode(false);
        // document.body.style.backgroundColor = "#ffffff";
        // document.body.style.color = "#000000";
        // // Clear the input fields
        // const startInput = document.getElementById("startInput");
        // const endInput = document.getElementById("endInput");
        // if (startInput && endInput) {
        //     startInput.innerText = "";
        //     endInput.innerText = "";
        // }
        // const contrastableTextElements =
        //     document.querySelectorAll(".contrastable-text");
        // contrastableTextElements.forEach((element) => {
        //     element.style.color = ""; // Reset to default or your desired color
        // });
    };

    return (
        <div className="absolute top-5 right-5 flex">
            <AccessibilityButton
                iconPath={aplus}
                alt="Button Schrift größer"
                title="Vergrößert die Schrift'+'"
                onClick={increaseFontSize}
            />
            <AccessibilityButton
                iconPath={aminus}
                alt="Button Schrift kleiner"
                title="Verkleinert die Schrift'-'"
                onClick={decreaseFontSize}
            />
            <AccessibilityButton
                iconPath={bnw}
                alt="Button für Kontrast"
                title="Ändert den Kontrast'c'"
                onClick={toggleContrast}
            />
            <AccessibilityButton
                iconPath={farbe}
                alt="Button für Kontrast zurücksetzen"
                title="Setzt den Kontrast zurück'd'"
                onClick={resetContrast}
            />
            <AccessibilityButton
                iconPath={zplus}
                alt="Button für Zeileanbstand größer"
                title="Erhöht den Zeilenabstand'z'"
                onClick={increaseLineHeight}
            />
            <AccessibilityButton
                iconPath={znormal}
                alt="Button für Zeilenabstand kleiner"
                title="Setzt den Zeilenabstand zurück't'"
                onClick={resetLineHeight}
            />
            <AccessibilityButton
                iconPath={returnz}
                alt="Button für alles zurücksetzen"
                title="Setzt alles zurück'r'"
                onClick={resetAll}
            />
            <AccessibilityButton
                iconPath={sprache}
                alt="Button für Sprache ändern"
                title="Sprache ändern"
                onClick={() => {}}
            />
        </div>
    );
}
