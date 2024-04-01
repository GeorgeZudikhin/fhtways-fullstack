from django.db import models
from .node import Node

class Edge(models.Model):
    start_node = models.ForeignKey(Node, on_delete=models.CASCADE, related_name='edges_starting')
    end_node = models.ForeignKey(Node, on_delete=models.CASCADE, related_name='edges_ending')
    weight = models.FloatField()
    description = models.TextField()

    def __str__(self):
        return f"{self.start_node} -> {self.end_node}"