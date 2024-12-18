import aminus from "../assets/aminus.png";
import aplus from "../assets/aplus.png";
import bnw from "../assets/black&white.png";
import farbe from "../assets/farbe.png";
import returnz from "../assets/return.png";
import znormal from "../assets/znormal.png";
import zplus from "../assets/zplus.png";
import AccessibilityButton from "./AccessibilityButton";

export default function AccessibilityButtonGroup() {
    return (
        <div className="flex">
            <AccessibilityButton
                iconPath={aplus}
                alt="Button Schrift größer"
                title="Vergrößert die Schrift'+'"
                onClick={() => {}}
            />
            <AccessibilityButton
                iconPath={aminus}
                alt="Button Schrift kleiner"
                title="Verkleinert die Schrift'-'"
                onClick={() => {}}
            />
            <AccessibilityButton
                iconPath={bnw}
                alt="Button für Kontrast"
                title="Ändert den Kontrast'c'"
                onClick={() => {}}
            />
            <AccessibilityButton
                iconPath={farbe}
                alt="Button für Kontrast zurücksetzen"
                title="Setzt den Kontrast zurück'd'"
                onClick={() => {}}
            />
            <AccessibilityButton
                iconPath={zplus}
                alt="Button für Zeileanbstand größer"
                title="Erhöht den Zeilenabstand'z'"
                onClick={() => {}}
            />
            <AccessibilityButton
                iconPath={znormal}
                alt="Button für Zeilenabstand kleiner"
                title="Setzt den Zeilenabstand zurück't'"
                onClick={() => {}}
            />
            <AccessibilityButton
                iconPath={returnz}
                alt="Button für alles zurücksetzen"
                title="Setzt alles zurück'r'"
                onClick={() => {}}
            />
        </div>
    );
}
