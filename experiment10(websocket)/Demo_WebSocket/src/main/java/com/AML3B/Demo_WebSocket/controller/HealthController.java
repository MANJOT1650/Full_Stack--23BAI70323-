package com.AML3B.Demo_WebSocket.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
    
    @GetMapping("/api/health")
    public String health() {
        return "{\"status\":\"UP\"}";
    }
    
    @GetMapping("/api/ws-info")
    public String wsInfo() {
        return "{\"endpoint\":\"ws://localhost:8080/ws\",\"status\":\"READY\"}";
    }
}
