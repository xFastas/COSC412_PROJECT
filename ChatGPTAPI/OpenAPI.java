import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class OpenAPI {
    public static void main(String[] args) {
        try {
            String apiKey = "";
            String endpoint = "https://api.openai.com/v1/chat/completions";

            URL url = new URL(endpoint);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");

            connection.setRequestProperty("Authorization", "Bearer " + apiKey);
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setDoOutput(true);

            String requestData = "{" +
                    "\"model\": \"gpt-3.5-turbo\"," +
                    "\"messages\": [{\"role\": \"assistant\", \"content\": \"Say Hello everyone in French!\"}]," +
                    "\"temperature\": 0.2" +
                    "}";
            System.out.println("Sending request...");

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

                System.out.println("Response Data: " + response.toString());
            } else if (responseCode == 429) {
                
                String retryAfterHeader = connection.getHeaderField("Retry-After");

                if (retryAfterHeader != null) {
                    int retryAfterSeconds = Integer.parseInt(retryAfterHeader);

                    System.out.println("Rate limited. Waiting for " + retryAfterSeconds + " seconds before retrying.");
                    Thread.sleep(retryAfterSeconds * 1000);
                }
            } else {
                System.out.println("Error:" + responseCode);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
