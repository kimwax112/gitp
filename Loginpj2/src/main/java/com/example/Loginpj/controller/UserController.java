package com.example.Loginpj.controller;

import com.example.Loginpj.model.User;
import com.example.Loginpj.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody User user) {
        try {
            boolean isCreated = userService.createUser(user);
            if (isCreated) {
                return ResponseEntity.ok().body("{\"message\": \"회원가입 성공!\"}");
            } else {
                return ResponseEntity.badRequest().body("{\"message\": \"아이디가 이미 존재합니다.\"}");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("{\"message\": \"서버 오류가 발생했습니다.\"}");
        }
    }
    @PostMapping("/login")
    public User login(@RequestBody User loginUser) {
        User user = userService.login(loginUser.getUsername(), loginUser.getPassword());
        if (user != null) {
            return user; // 로그인 성공
        }
        return null; // 로그인 실패
    }
}