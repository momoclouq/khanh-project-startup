package edu.kits.finalproject.Model;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Data
@Getter
@Setter
public class OrderDto implements Serializable {
    @NotNull
    private String orderId;

    @NotNull
    private List<Long> courseIds;

    @NotNull
    private double amount;

    @NotNull
    private String status;
}
