package com.tombari.productservice;

import com.tombari.productservice.entities.Product;
import com.tombari.productservice.repository.ProductRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.util.UUID;

@SpringBootApplication
public class ProductServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProductServiceApplication.class, args);
    }
    @Bean
    CommandLineRunner commandLineRunner(ProductRepository productRepository){
        return args -> {
            productRepository.save(Product.builder().id("P01").name("Laptop").price(2300).quantity(5)
                    .build());
            productRepository.save(Product.builder().id("P02").name("Mobile").price(1200).quantity(10)
                    .build());
            productRepository.save(Product.builder().id("P03").name("Ipad").price(4200).quantity(34)
                    .build());
        };
    }

}
