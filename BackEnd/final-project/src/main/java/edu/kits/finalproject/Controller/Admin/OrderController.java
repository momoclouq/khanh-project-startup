package edu.kits.finalproject.Controller.Admin;

import edu.kits.finalproject.Domain.Order;
import edu.kits.finalproject.Model.OrderDto;
import edu.kits.finalproject.Service.OrderService;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

@Controller
@RequestMapping("admin/order")
@Validated
public class OrderController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private OrderService orderService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Order addOrder(@Valid @RequestBody OrderDto order){
        String logPrefix = "addOrder";
        try{
            // should update this endpoint get correct input (list of coursesId)
            Order createdOrder = orderService.store("ABC", order.getAmount(), order.getStatus(), order.getCourseIds());
            return createdOrder;
        } catch (Exception e){
            System.out.println(logPrefix + " failed - " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Internal server error", e);
        }
    }

    @GetMapping("/{orderId}")
    @ResponseBody
    public OrderDto getOrderById(@PathVariable(name = "orderId") Long orderId){
        String logPrefix = "getOrderById";
        Order order;
        try {
            order = orderService.getOrderById(orderId);
        } catch (Exception e) {
            System.out.println(logPrefix + "-" + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "order service error", e);
        }

        if (order == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Order with id " + orderId + " not found", null);
        }
        return modelMapper.map(orderService.getOrderById(orderId), OrderDto.class);
    }
}
