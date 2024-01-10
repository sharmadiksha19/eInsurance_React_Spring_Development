package com.example.alcaline.customexceptions;

public class CustomerExceptionHandling extends RuntimeException {
    public CustomerExceptionHandling(String s) {
        super(s);
    }
}
