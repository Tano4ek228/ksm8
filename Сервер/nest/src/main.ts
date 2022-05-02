import { NestFactory } from "@nestjs/core";
import { DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function Start () {
    const port = process.env.port || 5000;
    const app = await NestFactory.create(AppModule)

    await app.listen(port, () => console.log(`Server started on port = ${port}`))
}
Start();