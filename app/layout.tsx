import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nippon Air",
  description:
    "Fly with us! Travel around Japan and explore the country. Find your perfect location, rest in our hotels / homes / ryoukans and find your inner peace in the country of the rising sun.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

//ACCEPT COOKIES
const aa = document.querySelector('[widgetid="jimu_dijit_CheckBox_0"]');
aa?.childNodes[0].click();
//click ok button
const b = document.querySelector('[data-dojo-attach-point="okNode"]');
b?.click();

//OPEN THE LAYER
const c = document.querySelector('[settingid="widgets_LayerList_Widget_20"]');
c.click();

///turnoff on default podzial administracyjny
const d = document.querySelector('[layertrnodeid="K07_PODZIAL_ADM_9870"]');

//zagospodarowanie
const b = document.querySelector('[layertrnodeid="BDOT_9196"]');

//ewidencja gruntow open and click some
const c = document.querySelector('[layertrnodeid="GI_EGIB_2773"]');

//numery adresowe
const c = document.querySelector('[layertrnodeid="GI_EGIB_2773_0"]');
//dzialki
const c = document.querySelector('[layertrnodeid="GI_EGIB_2773_1"]');
//obiekty zwiazane EGIB
const c = document.querySelector('[layertrnodeid="GI_EGIB_2773_4"]');
//obiekty bdot
const c = document.querySelector('[layertrnodeid="GI_EGIB_2773_24"]');

//zagospodarowanie terenu
const z = document.querySelector('[layertrnodeid="BDOT_9196"]');

//zagospodarowanie terenu slider opacity
const zaz = document.querySelector("#dijit_form_HorizontalSlider_0");

//event to click middle
// Get the position and dimensions of the container
var rect = d.getBoundingClientRect();

// Calculate the center coordinates
var centerX = rect.left + rect.width / 2;
var centerY = rect.top + rect.height / 2;

// Create a new MouseEvent object with the 'click' type
var clickEvent = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: centerX,
  clientY: centerY,
});

d.dispatchEvent(clickEvent);

// ============================= OR
// Get the reference to the div.container element
var container = document.querySelector(".container");

// Get the position and dimensions of the container
var rect = container.getBoundingClientRect();

// Calculate the center coordinates
var centerX = rect.left + rect.width / 2;
var centerY = rect.top + rect.height / 2;

// Function to trigger a mousehold event
function triggerMouseHold() {
  // Create a new MouseEvent object with the 'mousedown' type
  var mouseDownEvent = new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true,
    clientX: centerX,
    clientY: centerY,
  });

  // Dispatch the mousedown event at the center coordinates
  container.dispatchEvent(mouseDownEvent);

  // Set a timeout for 2 seconds (2000 milliseconds)
  setTimeout(function () {
    // Create a new MouseEvent object with the 'mouseup' type
    var mouseUpEvent = new MouseEvent("mouseup", {
      bubbles: true,
      cancelable: true,
      clientX: centerX,
      clientY: centerY,
    });

    // Dispatch the mouseup event at the center coordinates
    container.dispatchEvent(mouseUpEvent);
  }, 2000);
}

// Call the function to trigger the mousehold event
triggerMouseHold();

// Dispatch the click event at the center coordinates
zaz.dispatchEvent(clickEvent);

//siec elektromagnetyczna
const c = document.querySelector('[layertrnodeid="UZE_5642"]');
//punkty wysokosciowe istniejace
const c = document.querySelector('[layertrnodeid="UZE_5642_0"]');
//przewody elektromagnetyczne istniejace
const c = document.querySelector('[layertrnodeid="UZE_5642_4"]');
//urzadzenia elektromagnetyczne istniejace
const c = document.querySelector('[layertrnodeid="UZE_5642_18"]');
//elektroenergetyczne techniczne pkt
const c = document.querySelector('[layertrnodeid="UZE_5642_19"]');
//elektroenergetyczne techniczne linie
const c = document.querySelector('[layertrnodeid="UZE_5642_20"]');
//elektroenergetyczne techniczne poligon
const c = document.querySelector('[layertrnodeid="UZE_5642_21"]');
//szafa elektroenegertyczna lub kontener pkt
const c = document.querySelector('[layertrnodeid="UZE_5642_22"]');
//szafa elektroenegertyczna lub kontener
const c = document.querySelector('[layertrnodeid="UZE_5642_23"]');
// a.click()
