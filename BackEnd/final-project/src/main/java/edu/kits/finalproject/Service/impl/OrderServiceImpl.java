package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.Domain.Course;
import edu.kits.finalproject.Domain.Order;
import edu.kits.finalproject.Repository.CourseRepository;
import edu.kits.finalproject.Repository.OrderRepository;
import edu.kits.finalproject.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public Order store(String orderId, double amount, String status, List<Long> courseIds) {
        Date currentDate = new Date();
        Order order = new Order(currentDate, amount, status, orderId);

        List<Course> courseList = new ArrayList<>();
        courseIds.forEach((courseId) -> {
            Optional<Course> courseOptional = courseRepository.findById(courseId);
            if (courseOptional.isPresent()) {
                courseList.add(courseOptional.get());
            } else {
                throw new RuntimeException("Course with id " + courseId + " does not exist");
            }
        });
        order.setCourses(courseList);
        System.out.println(order);

        return orderRepository.save(order);
    }

    @Override
    public Order getOrderById(Long orderId) {
        Optional<Order> result = orderRepository.findById(orderId);
        if(result.isPresent())
            return result.get();
        return null;
    }

}
