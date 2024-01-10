package com.example.alcaline.customexceptions;

public class EmptyCustomerListException extends RuntimeException {
    public EmptyCustomerListException(String s) {
        super(s);
    }
}
