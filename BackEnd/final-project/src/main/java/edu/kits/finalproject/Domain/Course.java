package edu.kits.finalproject.Domain;

import com.mysql.cj.protocol.ColumnDefinition;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Courses")
public class Course implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;

    @Column(columnDefinition = "nvarchar(100) not null")
    private String name;

    @Column
    private double price;

    @Column(columnDefinition = "nvarchar(500)")
    private String desciption;

    @Lob
    @Column(columnDefinition="MEDIUMBLOB")
    private byte[] thumbnail;


    @Column(columnDefinition = "nvarchar(500)")
    private String listOfVideo;

    @Column
    private double rating;

    @Column
    private int enroll;

    @Column
    @ColumnDefault(value = "1")
    private int active;

    @Temporal(TemporalType.DATE)
    private Date created_at;

//    @ManyToOne
//    @JoinColumn(name = "tutorId")
//    private Tutor tutor;

    @ManyToOne
    @JoinColumn(name = "categoryId")
    private Category category;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.MERGE,
                    CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinTable(
            name = "user_course",
            joinColumns = @JoinColumn(name = "courseId"),
            inverseJoinColumns = @JoinColumn(name = "userId"))
    private List<User> users;

//    @ManyToOne
//    @JoinColumn(name = "orderId")
//    private Order order;

    public Course(String name, double price, String desciption, byte[] thumbnail, double rating, int enroll, String listOfVideo) {
        this.name = name;
        this.price = price;
        this.desciption = desciption;
        this.thumbnail = thumbnail;
        this.rating = rating;
        this.enroll = enroll;
        this.listOfVideo = listOfVideo;
    }

    public List<User> getUsers() {
        return users;
    }
}
