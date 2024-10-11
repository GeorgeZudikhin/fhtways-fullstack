from django.db import models

class Node(models.Model):
    name = models.CharField(max_length=255)
    coord_x = models.IntegerField()
    coord_y = models.IntegerField()
    node_type = models.CharField(max_length=50)  # e.g., "room", "corridor", etc.

    def __str__(self):
        return self.name


class Edge(models.Model):
    from_node = models.ForeignKey(Node, related_name='from_edges', on_delete=models.CASCADE)
    to_node = models.ForeignKey(Node, related_name='to_edges', on_delete=models.CASCADE)
    weight = models.FloatField()
    description = models.TextField()

    def __str__(self):
        return f"Edge from {self.from_node.name} to {self.to_node.name}"
