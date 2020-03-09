import namespace from "./core/namespace";
import initializeLayout from "./views/layout/initialize";
import FormBehavior from "./views/FormBehavior";

initializeLayout();

window.App = {
    FormBehavior
};

namespace(window.App);
