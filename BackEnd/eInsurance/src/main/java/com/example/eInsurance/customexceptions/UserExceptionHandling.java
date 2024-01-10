package com.example.alcaline.customexceptions;

@SuppressWarnings("serial")
public class UserExceptionHandling extends RuntimeException {
    public UserExceptionHandling(String mesg) {
        super(mesg);
    }
}
