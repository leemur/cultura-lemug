import type {ApplicationContract}
from '@ioc:Adonis/Core/Application'
import mongoose from 'mongoose';
import Env from '@ioc:Adonis/Core/Env'

export default class AppProvider {
    constructor(protected app : ApplicationContract) {}

    public register() {
        mongoose.connect(Env.get('MONGO'));
        // Register your own bindings
    }

    public async boot() {
        // IoC container is ready
    }

    public async ready() {
        // App is ready
    }

    public async shutdown() {
        // Cleanup, since app is going down
    }
}
