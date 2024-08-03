package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Order;
import com.example.demo.repositories.OrderRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    public Order getOrderById(Integer orderId) {
        return orderRepository.findById(orderId).orElse(null);
    }

    public void deleteOrder(Integer orderId) {
        orderRepository.deleteById(orderId);
    }
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
