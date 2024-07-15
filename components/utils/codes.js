export const translations =
    [
  {
    language: 'csharp',
    code: `using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        var httpClient = new HttpClient();
        var data = new StringContent("{\"keyword\":\"_KEYWORD_\",\"gl\":\"_GL_\",\"hl\":\"_HL_\"}", Encoding.UTF8, "application/json");

        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Post,
            RequestUri = new Uri("https://queries.keywordquill.com/search"),
            Headers =
            {
                { "X-API-KEY", "_API_KEY_" },
                { "Content-Type", "application/json" },
            },
            Content = data,
        };

        try
        {
            var response = await httpClient.SendAsync(request);
            response.EnsureSuccessStatusCode();
            var responseBody = await response.Content.ReadAsStringAsync();
            Console.WriteLine(responseBody);
        }
        catch (HttpRequestException e)
        {
            Console.WriteLine($"Request error: {e.Message}");
        }
    }
}`
  },
  {
    language: 'curl',
    code: `curl -X POST \\
  https://queries.keywordquill.com/search \\
  -H 'Content-Type: application/json' \\
  -H 'X-API-KEY: _API_KEY_' \\
  -d '{"keyword":"_KEYWORD_","gl":"_GL_","hl":"_HL_"}'`
  },
  {
    language: 'dart',
    code: `import 'dart:convert';
import 'package:http/http.dart' as http;

void main() async {
  var url = Uri.parse('https://queries.keywordquill.com/search');
  var headers = {
    'X-API-KEY': '_API_KEY_',
    'Content-Type': 'application/json',
  };
  var body = jsonEncode({'keyword': '_KEYWORD_', 'gl': '_GL_', 'hl': '_HL_'});

  try {
    var response = await http.post(url, headers: headers, body: body);
    print(response.body);
  } catch (e) {
    print('Request error: $e');
  }
}`
  },
  {
    language: 'go',
    code: `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	url := "https://queries.keywordquill.com/search"
	payload := map[string]string{
		"keyword": "_KEYWORD_",
		"gl":      "_GL_",
		"hl":      "_HL_",
	}
	jsonPayload, _ := json.Marshal(payload)

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonPayload))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-API-KEY", "_API_KEY_")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Request error:", err)
		return
	}
	defer resp.Body.Close()

	var result map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&result)
	fmt.Println(result)
}`
  },
  {
    language: 'java',
    code: `import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpHeaders;
import java.net.http.HttpBodyPublishers;

public class Main {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        String url = "https://queries.keywordquill.com/search";
        String data = "{\"keyword\":\"_KEYWORD_\",\"gl\":\"_GL_\",\"hl\":\"_HL_\"}";

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .POST(HttpRequest.BodyPublishers.ofString(data))
                .header("Content-Type", "application/json")
                .header("X-API-KEY", "_API_KEY_")
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}`
  },
  {
    language: 'py',
    code: `import requests

url = "https://queries.keywordquill.com/search"
payload = {
    "keyword": "_KEYWORD_",
    "gl": "_GL_",
    "hl": "_HL_",
}
headers = {
    "X-API-KEY": "_API_KEY_",
    "Content-Type": "application/json",
}

try:
    response = requests.post(url, json=payload, headers=headers)
    print(response.json())
except requests.exceptions.RequestException as e:
    print("Request error:", e)`
  },
  {
    language: 'ruby',
    code: `require 'net/http'
require 'uri'
require 'json'

url = URI("https://queries.keywordquill.com/search")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["X-API-KEY"] = "_API_KEY_"
request.body = JSON.dump({
  "keyword" => "_KEYWORD_",
  "gl" => "_GL_",
  "hl" => "_HL_"
})

begin
  response = https.request(request)
  puts response.read_body
rescue StandardError => e
  puts "Request error: #{e.message}"
end`
  },
  {
    language: 'swift',
    code: `import Foundation

let url = URL(string: "https://queries.keywordquill.com/search")!
var request = URLRequest(url: url)
request.httpMethod = "POST"
request.setValue("application/json", forHTTPHeaderField: "Content-Type")
request.setValue("_API_KEY_", forHTTPHeaderField: "X-API-KEY")

let jsonData = try! JSONSerialization.data(withJSONObject: ["keyword": "_KEYWORD_", "gl": "_GL_", "hl": "_HL_"])

request.httpBody = jsonData

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    if let error = error {
        print("Request error: \(error)")
        return
    }
    
    guard let data = data else {
        print("No data received")
        return
    }
    
    if let json = try? JSONSerialization.jsonObject(with: data, options: []) {
        print(json)
    } else {
        print("Invalid JSON response")
    }
}

task.resume()`
  },
  {
    language: 'php',
    code: `<?php
$url = 'https://queries.keywordquill.com/search';
$data = json_encode([
    'keyword' => '_KEYWORD_',
    'gl' => '_GL_',
    'hl' => '_HL_'
]);

$options = [
    'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/json\r\n" .
                    "X-API-KEY: _API_KEY_\r\n",
        'content' => $data
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
    echo "Request error";
} else {
    echo $response;
}
?>`
  },
  {
    language: 'r',
    code: `library(httr)

url <- "https://queries.keywordquill.com/search"
body <- list(
  keyword = "_KEYWORD_",
  gl = "_GL_",
  hl = "_HL_"
)
headers <- c(
  "X-API-KEY" = "_API_KEY_",
  "Content-Type" = "application/json"
)

response <- POST(url, body = body, encode = "json", verbose(), add_headers(.headers=headers))
print(content(response))`
  },
  {
    language: 'shell',
    code: `#!/bin/bash

url="https://queries.keywordquill.com/search"
data='{"keyword":"_KEYWORD_","gl":"_GL_","hl":"_HL_"}'

curl -X POST -H "Content-Type: application/json" -H "X-API-KEY: _API_KEY_" -d "$data" "$url"`
  },
  {
    language: 'c',
    code: `#include <stdio.h>
#include <curl/curl.h>
#include <string.h>

int main() {
    CURL *curl;
    CURLcode res;
    char *data = "{\"keyword\":\"_KEYWORD_\",\"gl\":\"_GL_\",\"hl\":\"_HL_\"}";
    
    curl = curl_easy_init();
    if (curl) {
        struct curl_slist *headers = NULL;
        headers = curl_slist_append(headers, "Content-Type: application/json");
        headers = curl_slist_append(headers, "X-API-KEY: _API_KEY_");

        curl_easy_setopt(curl, CURLOPT_URL, "https://queries.keywordquill.com/search");
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data);

        res = curl_easy_perform(curl);

        if (res != CURLE_OK)
            fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));

        curl_easy_cleanup(curl);
    }

    return 0;
}`
  },
  {
    language: 'ocaml',
    code: `open Curl

let () =
  let curl = init () in
  let data = "{\"keyword\":\"_KEYWORD_\",\"gl\":\"_GL_\",\"hl\":\"_HL_\"}" in
  set_url curl "https://queries.keywordquill.com/search";
  set_post curl true;
  set_httpheader curl ["Content-Type: application/json"; "X-API-KEY: _API_KEY_"];
  set_postfields curl data;
  perform curl;
  cleanup curl`
  },
  {
    language: 'powershell',
    code: `$data = @{
    keyword = "_KEYWORD_"
    gl = "_GL_"
    hl = "_HL_"
} | ConvertTo-Json

$headers = @{
    "X-API-KEY" = "_API_KEY_"
    "Content-Type" = "application/json"
}

Invoke-RestMethod -Method Post -Uri "https://queries.keywordquill.com/search" -Headers $headers -Body $data`
  },
  {
    language: 'http',
    code: `http POST https://queries.keywordquill.com/search \/
Content-Type:application/json \/
X-API-KEY:_API_KEY_ \/
keyword="_KEYWORD_" \/
gl="_GL_" \/
hl="_HL_"`
  },
  {
    language: 'nodejs',
    code: `const axios = require('axios');

const data = JSON.stringify({
  "keyword": "_KEYWORD_",
  "gl": "_GL_",
  "hl": "_HL_"
});

const config = {
  method: 'post',
  url: 'https://queries.keywordquill.com/search',
  headers: { 
    'X-API-KEY': '_API_KEY_', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});`
  },
  {
    language: 'objc',
    code: `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSURL *url = [NSURL URLWithString:@"https://queries.keywordquill.com/search"];
        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url
                                                               cachePolicy:NSURLRequestUseProtocolCachePolicy
                                                           timeoutInterval:10.0];
        [request setHTTPMethod:@"POST"];
        [request addValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
        [request addValue:@"_API_KEY_" forHTTPHeaderField:@"X-API-KEY"];
        
        NSDictionary *bodyData = @{@"keyword": @"_KEYWORD_",
                                   @"gl": @"_GL_",
                                   @"hl": @"_HL_"};
        NSError *error;
        NSData *postData = [NSJSONSerialization dataWithJSONObject:bodyData options:0 error:&error];
        [request setHTTPBody:postData];
        
        NSURLSession *session = [NSURLSession sharedSession];
        NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request
                                                    completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
            if (error) {
                NSLog(@"Request error: %@", error);
            } else {
                NSDictionary *json = [NSJSONSerialization JSONObjectWithData:data options:0 error:nil];
                NSLog(@"%@", json);
            }
        }];
        [dataTask resume];
    }
    return 0;
}`
  },
  {
    language: 'js',
    code: `const data = JSON.stringify({
  "keyword": "_KEYWORD_",
  "gl": "_GL_",
  "hl": "_HL_"
});

fetch('https://queries.keywordquill.com/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': '_API_KEY_'
  },
  body: data
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`
  }
]