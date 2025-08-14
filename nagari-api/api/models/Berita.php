<?php

class Berita
{
    private $conn;
    private $table_name = "berita";

    public $id;
    public $title;
    public $category;
    public $date;
    public $imageUrl;
    public $headline;
    public $content;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function read()
    {
        $query = "SELECT * FROM " . $this->table_name . " ORDER BY date DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function readOne()
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE id = ? LIMIT 0,1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->title = $row['title'];
        $this->category = $row['category'];
        $this->date = $row['date'];
        $this->imageUrl = $row['imageUrl'];
        $this->headline = $row['headline'];
        $this->content = $row['content'];
    }

    public function create()
    {
        $query = "INSERT INTO " . $this->table_name . "
SET title=:title, category=:category, date=:date, imageUrl=:imageUrl, headline=:headline, content=:content";

        $stmt = $this->conn->prepare($query);

        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->category = htmlspecialchars(strip_tags($this->category));
        $this->date = htmlspecialchars(strip_tags($this->date));
        $this->imageUrl = htmlspecialchars(strip_tags($this->imageUrl));
        $this->headline = $this->headline;
        $this->content = $this->content;

        $stmt->bindParam(":title", $this->title);
        $stmt->bindParam(":category", $this->category);
        $stmt->bindParam(":date", $this->date);
        $stmt->bindParam(":imageUrl", $this->imageUrl);
        $stmt->bindParam(":headline", $this->headline);
        $stmt->bindParam(":content", $this->content);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function update()
    {
        $query = "UPDATE " . $this->table_name . "
SET title = :title, category = :category, date = :date, imageUrl = :imageUrl, headline = :headline, content = :content
WHERE id = :id";

        $stmt = $this->conn->prepare($query);

        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->category = htmlspecialchars(strip_tags($this->category));
        $this->date = htmlspecialchars(strip_tags($this->date));
        $this->imageUrl = htmlspecialchars(strip_tags($this->imageUrl));
        $this->headline = $this->headline;
        $this->content = $this->content;
        $this->id = htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':category', $this->category);
        $stmt->bindParam(':date', $this->date);
        $stmt->bindParam(':imageUrl', $this->imageUrl);
        $stmt->bindParam(':headline', $this->headline);
        $stmt->bindParam(':content', $this->content);
        $stmt->bindParam(':id', $this->id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function delete()
    {
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function getLatestThree()
    {
        $query = "SELECT * FROM " . $this->table_name . " ORDER BY date DESC LIMIT 3";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}