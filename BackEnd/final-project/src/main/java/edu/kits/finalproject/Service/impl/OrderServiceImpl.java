package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.Domain.Course;
import edu.kits.finalproject.Domain.Order;
import edu.kits.finalproject.Repository.OrderRepository;
import edu.kits.finalproject.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order store(String orderId, Date orderDate, double amount, String status, String courses) throws IOException {
        Order order = new Order(orderId, orderDate, amount, status, courses);
        return orderRepository.save(order);
    }

    @Override
    public Order getOrderById(String orderId) {
        Optional<Order> result = orderRepository.findById(orderId);
        if(result.isPresent())
            return result.get();
        return new Order();
    }


}
