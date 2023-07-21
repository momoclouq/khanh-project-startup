package edu.kits.finalproject.Domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "categories")
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    @Column(name = "name", length = 100, columnDefinition = "nvarchar(100) not null")
    private String name;

    @Column(nullable = false)
    private int active;

    //    cascade giúp, khi xoá category thì sẽ tự động xoá hết tất cả products liên quan
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private Set<Course> courses;
}
