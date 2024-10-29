"use strict";
import { gapiLoaded, gisLoaded } from "./googleapi";

const apiScript = document.getElementById("apiScript")
apiScript.onload = gapiLoaded()
const gsiScript = document.getElementById('gsiScript')
gsiScript.onload = gisLoaded()
