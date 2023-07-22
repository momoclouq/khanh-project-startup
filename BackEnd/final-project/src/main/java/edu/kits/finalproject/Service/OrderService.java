package edu.kits.finalproject.Service;

import edu.kits.finalproject.Domain.Course;
import edu.kits.finalproject.Domain.Order;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;

public interface OrderService {
    Order store(String orderId, double amount, String status, List<Long> courseIds);

    Order getOrderById(Long orderId);

}
