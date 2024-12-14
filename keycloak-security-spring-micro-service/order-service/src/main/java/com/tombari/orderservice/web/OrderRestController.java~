package com.tombari.orderservice.web;

import com.tombari.orderservice.entities.Order;
import com.tombari.orderservice.feign.ProductRestClient;
import com.tombari.orderservice.repository.OrderRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrdersRestControllers {
    private OrderRepository orderRepository;
    private ProductRestClient productRestClient;

    public OrdersRestControllers(OrderRepository orderRepository, ProductRestClient productRestClient) {
        this.orderRepository = orderRepository;
        this.productRestClient = productRestClient;
    }

    @GetMapping("/orders")
    public List<Order> findAllOrders(){
        List<Order> allOrders = orderRepository.findAll();
        allOrders.forEach(o->{
            o.getProductItems().forEach(pi->{
                pi.setProduct(productRestClient.findProductById(pi.getProductId()));
            });
        });
        return allOrders;
    }
    @GetMapping("/orders/{id}")
    public Order findOrderById(@PathVariable String id){
        Order order = orderRepository.findById(id).get();
        order.getProductItems().forEach(pi->{
            pi.setProduct(productRestClient.findProductById(pi.getProductId()));
        });
        return order;
    }
}
