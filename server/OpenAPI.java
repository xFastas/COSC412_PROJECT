package server;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.DataOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class OpenAPI {
    public static void main(String[] args) {
        try {
            String apiKey = ""; //Enter your own API Key
            String endpoint = "https://api.openai.com/v1/chat/completions";

            URL url = new URL(endpoint);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");

            connection.setRequestProperty("Authorization", "Bearer " + apiKey);
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setDoOutput(true);

            String requestData = "{" +
                    "\"model\": \"gpt-3.5-turbo\"," +
                    "\"messages\": [{\"role\": \"assistant\", \"content\": \"give me a recipe that uses"+args[0]+", use json format to describe the name, ingredients, and steps.\"}]," +
                    "\"temperature\": 0.2" +
                    "}";

            try (DataOutputStream dataReq = new DataOutputStream(connection.getOutputStream())) {
                dataReq.writeBytes(requestData);
                dataReq.flush();
            }

            int responseCode = connection.getResponseCode();

            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuffer response = new StringBuffer();
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();
                System.out.println(response.toString());

            } else {
                System.out.println("Error:" + responseCode);

            }

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Error");
        }
    }
    
}
