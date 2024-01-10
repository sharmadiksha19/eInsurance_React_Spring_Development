package com.example.alcaline.customexceptions;

@SuppressWarnings("serial")
public class UserDatabaseExceptionHandling extends RuntimeException {
    public UserDatabaseExceptionHandling(String mesg) {
        super(mesg);
    }
}
