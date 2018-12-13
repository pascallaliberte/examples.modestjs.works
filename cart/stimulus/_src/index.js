import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

// CSS and SASS files
import './index.scss';

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
