package TCC.TCC.config;

import io.github.cdimascio.dotenv.Dotenv;

public class EnvLoader {
    public static void load() {
        Dotenv dotenv = Dotenv.configure()
            .directory("C:\\Users\\arthu\\Repositórios\\TCC\\TCC\\BackEnd\\TCC")
            .filename(".env")
            .load();

        dotenv.entries().forEach(entry ->
            System.setProperty(entry.getKey(), entry.getValue())
        );
    }
}
