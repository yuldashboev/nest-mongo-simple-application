export default {
    ServiceHost: getOrReturnDefault("SERVICE_HOST", "localhost"),
    ServicePort: getOrReturnDefault("SERVICE_PORT", "8080"),

    MongoHost: getOrReturnDefault("MONGO_HOST", "localhost"),
    MongoPort: getOrReturnDefault("MONGO_PORT", "27017"),
}



function getOrReturnDefault(name: string, def: any): any {
    if (process.env[name]) {
        return process.env[name]
    }
    return def
}