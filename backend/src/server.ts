import { app, setupServer } from "./app"
import { setupDatabase } from "./data/setup"


function start(){
    setupDatabase()
    setupServer()
}

start()