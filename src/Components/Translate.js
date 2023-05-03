import React, { useContext } from "react";
import t from "prop-types";

import constantes from "../Common/constantes.js";
import PreferencesContext from "../Context/PreferenceContext.js";

function Translate({ children }) {
  const { preferences } = useContext(PreferencesContext);
  if (preferences.language === "fr") {
    return constantes[children];
  }
  return children;
}

Translate.propTypes = {
  children: t.string,
};

export default Translate;
