const Cat = mongoose.model("Cat", { name: String });

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            require: true,
        },
        publisherYear: {
            type: Number,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model("Cat", bookSchema);
