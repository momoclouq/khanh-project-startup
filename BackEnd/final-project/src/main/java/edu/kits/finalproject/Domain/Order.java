package edu.kits.finalproject.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.DATE)
    private Date orderDate;

    @Column(nullable = false)
    private double amount;

    @Column(nullable = false)
    private String status;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.MERGE,
            CascadeType.PERSIST
    })
    @JoinTable(
            name = "orders_courses",
            joinColumns = { @JoinColumn(name = "course_id") },
            inverseJoinColumns = { @JoinColumn(name = "order_id") }
    )
//    @EqualsAndHashCode.Exclude
//    @ToString.Exclude
    private List<Course> courses;

    @Column(nullable = false)
    private String orderId;

    public Order(Date orderDate, double amount, String status, String orderId) {
        this.orderDate = orderDate;
        this.amount = amount;
        this.status = status;
        this.courses = new ArrayList<>();
        this.orderId = orderId;
    }

    @Override
    public String toString(){
        return "order: " + amount + ", " + status + ", " + orderId;
    }

}