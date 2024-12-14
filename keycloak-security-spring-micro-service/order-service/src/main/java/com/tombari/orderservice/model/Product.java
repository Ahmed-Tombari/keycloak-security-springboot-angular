package com.tombari.orderservice.model;

import lombok.*;
@NoArgsConstructor @AllArgsConstructor @Data @Getter @Setter @Builder
public class Product {
    private String id;
    private String name;
    private double price;
    private int quantity;
}