package edu.kits.finalproject.Domain;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    @Temporal(TemporalType.DATE)
    private Date orderDate;

    @Column(nullable = false)
    private double amount;

    @Column(nullable = false)
    private String status;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "courseId")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private List<Course> courses;

    public Order(Date orderDate, double amount, String status) {
        this.orderDate = orderDate;
        this.amount = amount;
        this.status = status;
        this.courses = new ArrayList<>();
    }

    //    @ManyToOne
//    @JoinColumn(name = "customerId")
//    private Customer customer;

//    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//    private Set<OrderDetail> orderDetails;
}