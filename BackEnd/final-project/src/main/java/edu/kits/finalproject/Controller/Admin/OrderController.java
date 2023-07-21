package edu.kits.finalproject.Controller.Admin;

import edu.kits.finalproject.Domain.Order;
import edu.kits.finalproject.Model.OrderDto;
import edu.kits.finalproject.Service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

@Controller
@RequestMapping("admin/order")
public class OrderController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private OrderService orderService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Order addOrder(@RequestBody Order order){
        String logPrefix = "addOrder";
        try{
            // should update this endpoint get correct input (list of coursesId)
            Order createdOrder = orderService.store(order.getAmount(), order.getStatus(), Arrays.asList(1L, 2L, 3L));
            return createdOrder;
        } catch (Exception e){
            System.out.println(logPrefix + " failed -" + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Internal server error", e);
        }
    }

    @GetMapping("/{orderId}")
    @ResponseBody
    public OrderDto getOrderById(@PathVariable(name = "orderId") String orderId){
        String logPrefix = "getOrderById";
        try {
            Order order = orderService.getOrderById(orderId);
            if (order == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Order with id " + orderId + " not found", null);
            }
            return modelMapper.map(orderService.getOrderById(orderId), OrderDto.class);
        } catch (Exception e) {
            System.out.println(logPrefix + "-" + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Internal server error", e);
        }
    }
}
