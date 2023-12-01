package com.music.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordUtils {
    private static BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

    public static String encryptPassword(String password) {
        return passwordEncoder.encode(password);
    }

    public static boolean matchPassword(String password, String encryptedPassword) {
        return passwordEncoder.matches(password, encryptedPassword);
    }
}
