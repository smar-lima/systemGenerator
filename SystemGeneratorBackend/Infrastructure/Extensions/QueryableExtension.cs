using Domain.Models.General;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Reflection;

namespace Infrastructure.Extensions
{
    public static class QueryableExtension
    {
        //public static IQueryable<T> FilterView<T>(this IQueryable<T> query, Filter filter, int pageNumber, int pageSize, out int dataCount)
        //{
        //    query = query.ApplyFilter(filter);

        //    return query.ExecutePaginated(pageNumber, pageSize, out dataCount);
        //}

        //public static IQueryable<T> ApplyFilter<T>(this IQueryable<T> query, Filter filter)
        //{

        //    foreach (var filterItem in filter.FilterItens)
        //    {
        //        query = query.WhereByDynamic(filterItem);
        //    }


        //    foreach (var filterOrder in filter.FilterOrder)
        //    {
        //        if (!isOrdered)
        //        {
        //            query = query.OrderByDynamic(filterOrder.Field, filterOrder.order);
        //            isOrdered = true;
        //        }
        //        else
        //        {
        //            query = ((IOrderedQueryable<T>)query).ThenByDynamic(filterOrder.Field, filterOrder.order);
        //        }
        //    }
        //    return query;
        //}

        //public static IQueryable<T> ExecutePaginated<T>(this IQueryable<T> query, int pageNumber, int pageSize, out int dataCount)
        //{
        //    dataCount = query.Count();

        //    if (pageSize != 65536)
        //    {
        //        if (pageNumber > 1)
        //            query = query.Skip(pageSize * (pageNumber - 1));

        //        query = query.Take(pageSize);
        //    }

        //    return query;
        //}

        //public static IQueryable<T> WhereByDynamic<T>(this IQueryable<T> query, FilterItem filterItem)
        //{
        //    ParameterExpression pe = Expression.Parameter(typeof(T), "p");

        //    Expression call = null;

        //    var left = filterItem.SetLeftProperties(pe);

        //    if (filterItem.SomenteNull && filterItem.Tipo == "date")
        //    {
        //        call = Expression.Equal(Expression.Convert(left, typeof(DateTime?)), Expression.Constant(null, typeof(object)));
        //    }
        //    else
        //    {
        //        foreach (var input in filterItem.entradas)
        //        {
        //            if ((input.Valor != null && input.Valor.ToString() != "") || input.EhBuscaAvancada)
        //            {
        //                Expression auxCall = null;

        //                if (filterItem.Tipo == "conta" || filterItem.Tipo == "contanomask")
        //                    auxCall = input.GetExpression(pe, filterItem.Campo);
        //                else
        //                    auxCall = input.GetExpression(left);

        //                if (input.TipoConcatenacao == "AND")
        //                    call = call == null ? auxCall : Expression.AndAlso(call, auxCall);
        //                else if (input.TipoConcatenacao == "OR")
        //                    call = call == null ? auxCall : Expression.OrElse(call, auxCall);

        //            }
        //        }
        //    }
        //    Expression<Func<T, bool>> lambda = null;

        //    if (filterItem.OuNulo && filterItem.Tipo == "date")
        //    {
        //        var auxCall = Expression.Equal(Expression.Convert(left, typeof(DateTime?)), Expression.Constant(null, typeof(object)));
        //        call = call != null ? Expression.OrElse(call, auxCall) : call;
        //    }

        //    if (call != null)
        //        lambda = Expression.Lambda<Func<T, bool>>(call, pe);

        //    return lambda != null ? query.Where(lambda) : query;
        //}



        //public static IQueryable<T> OrderByFilterOrder<T>(this IQueryable<T> query, List<FilterOrder> filterOrders)
        //{
        //    bool first = true;
        //    foreach (var filterOrder in filterOrders)
        //    {
        //        if (first)
        //        {
        //            string command = "OrderBy";

        //            if (filterOrder.order == "D")
        //            {
        //                command = "OrderByDescending";
        //            }
        //            query = OrderExpression(query, filterOrder.Field, command);
        //        }
        //        else
        //        {
        //            string command = "ThenBy";

        //            if (filterOrder.order == "D")
        //            {
        //                command = "ThenByDescending";
        //            }
        //            query = OrderExpression(query, filterOrder.Field, command);

        //        }
        //        first = false;
        //    }
        //    return query;
        //}

        //public static IQueryable<T> OrderByDynamic<T>(this IQueryable<T> query, string sortColumn, string order)
        //{
        //    string command = "OrderBy";

        //    if (order == "D")
        //    {
        //        command = "OrderByDescending";
        //    }

        //    return OrderExpression(query, sortColumn, command);
        //}

        //public static IQueryable<T> ThenByDynamic<T>(this IOrderedQueryable<T> query, string sortColumn, string order)
        //{
        //    string command = "ThenBy";

        //    if (order == "D")
        //    {
        //        command = "ThenByDescending";
        //    }

        //    return OrderExpression(query, sortColumn, command);
        //}

        //public static IQueryable<T> ThenByDynamic<T>(this IQueryable<T> query, string sortColumn, string order)
        //{
        //    string command = "ThenBy";

        //    if (order == "D")
        //    {
        //        command = "ThenByDescending";
        //    }

        //    return OrderExpression(query, sortColumn, command);
        //}

        //private static IQueryable<T> OrderExpression<T>(IQueryable<T> query, string sortColumn, string command)
        //{
        //    string[] props = sortColumn.Split('.');
        //    Type type = typeof(T);
        //    ParameterExpression arg = Expression.Parameter(type, "x");
        //    Expression expr = arg;
        //    foreach (string prop in props)
        //    {
        //        if (prop.Equals("First()"))
        //        {
        //            MethodInfo findMethod = null;

        //            var methods = typeof(Enumerable).GetMethods(BindingFlags.Static | BindingFlags.Public)
        //                .Where(m => m.Name == "FirstOrDefault");

        //            foreach (var methodInfo in methods)
        //            {
        //                if (methodInfo.GetParameters().Length == 1)
        //                {
        //                    findMethod = methodInfo;
        //                }
        //            }

        //            type = (expr.Type.GenericTypeArguments[0]).UnderlyingSystemType;

        //            findMethod = findMethod.MakeGenericMethod(type);
        //            expr = Expression.Call(null, findMethod, expr);
        //        }
        //        else
        //        {
        //            PropertyInfo pi = type.GetProperty(prop);
        //            expr = Expression.Property(expr, pi);
        //            type = pi.PropertyType;
        //        }
        //    }
        //    Type delegateType = typeof(Func<,>).MakeGenericType(typeof(T), type);
        //    LambdaExpression lambda = Expression.Lambda(delegateType, expr, arg);

        //    object result = typeof(Queryable).GetMethods().Single(
        //            method => method.Name == command
        //                    && method.IsGenericMethodDefinition
        //                    && method.GetGenericArguments().Length == 2
        //                    && method.GetParameters().Length == 2)
        //            .MakeGenericMethod(typeof(T), type)
        //            .Invoke(null, new object[] { query, lambda });
        //    return (IOrderedQueryable<T>)result;
        //}

        //public static IQueryable<T> WhereByDynamic<T>(this IQueryable<T> query, FilterItem filterItem)
        //{
        //    ParameterExpression pe = Expression.Parameter(typeof(T), "p");

        //    Expression call = null;

        //    var left = filterItem.SetLeftProperties(pe);

        //    if (filterItem.SomenteNull && filterItem.Tipo == "date")
        //    {
        //        call = Expression.Equal(Expression.Convert(left, typeof(DateTime?)), Expression.Constant(null, typeof(object)));
        //    }
        //    else
        //    {
        //        foreach (var input in filterItem.entradas)
        //        {
        //            if ((input.Valor != null && input.Valor.ToString() != "") || input.EhBuscaAvancada)
        //            {
        //                Expression auxCall = null;

        //                if (filterItem.Tipo == "conta" || filterItem.Tipo == "contanomask")
        //                    auxCall = input.GetExpression(pe, filterItem.Campo);
        //                else
        //                    auxCall = input.GetExpression(left);

        //                if (input.TipoConcatenacao == "AND")
        //                    call = call == null ? auxCall : Expression.AndAlso(call, auxCall);
        //                else if (input.TipoConcatenacao == "OR")
        //                    call = call == null ? auxCall : Expression.OrElse(call, auxCall);

        //            }
        //        }
        //    }
        //    Expression<Func<T, bool>> lambda = null;

        //    if (filterItem.OuNulo && filterItem.Tipo == "date")
        //    {
        //        var auxCall = Expression.Equal(Expression.Convert(left, typeof(DateTime?)), Expression.Constant(null, typeof(object)));
        //        call = call != null ? Expression.OrElse(call, auxCall) : call;
        //    }

        //    if (call != null)
        //        lambda = Expression.Lambda<Func<T, bool>>(call, pe);

        //    return lambda != null ? query.Where(lambda) : query;
        //}

        //public static IQueryable<T> FindByFilter<T>(this IQueryable<T> query, Filter filter, int pageNumber, int pageSize, out int dataCount)
        //{
        //    query = query.ApplyFilter(filter);

        //    return query.ExecutePaginated(pageNumber, pageSize, out dataCount);
        //}

        //public static IQueryable<T> ExecutePaginated<T>(this IQueryable<T> query, int pageNumber, int pageSize, out int dataCount)
        //{
        //    dataCount = query.Count();

        //    if (pageSize != 65536)
        //    {
        //        if (pageNumber > 1)
        //            query = query.Skip(pageSize * (pageNumber - 1));

        //        query = query.Take(pageSize);
        //    }

        //    return query;
        //}

        //public static IQueryable<T> ApplyFilter<T>(this IQueryable<T> query, Filter filter)
        //{
        //    var isOrdered = false;
        //    var isDynamic = filter.FilterItens.First()?.GridDinamica != null;

        //    if (isDynamic)
        //        return query;


        //    foreach (var filterItem in filter.FilterItens)
        //    {
        //        query = query.WhereByDynamic(filterItem);
        //    }


        //    foreach (var filterOrder in filter.FilterOrder)
        //    {
        //        if (!isOrdered)
        //        {
        //            query = query.OrderByDynamic(filterOrder.Field, filterOrder.order);
        //            isOrdered = true;
        //        }
        //        else
        //        {
        //            query = ((IOrderedQueryable<T>)query).ThenByDynamic(filterOrder.Field, filterOrder.order);
        //        }
        //    }
        //    return query;
        //}

        //public static IQueryable<T> ApplyFilter<T>(this IQueryable<T> query, Filter filter, out int dataCount)
        //{
        //    dataCount = query.Count();

        //    var isOrdered = false;

        //    foreach (var filterItem in filter.FilterItens)
        //    {
        //        query = query.WhereByDynamic(filterItem);
        //    }


        //    foreach (var filterOrder in filter.FilterOrder)
        //    {
        //        if (!isOrdered)
        //        {
        //            query = query.OrderByDynamic(filterOrder.Field, filterOrder.order);
        //            isOrdered = true;
        //        }
        //        else
        //        {
        //            query = ((IOrderedQueryable<T>)query).ThenByDynamic(filterOrder.Field, filterOrder.order);
        //        }
        //    }

        //    return query;
        //}

        //public static IQueryable<T> ApplyOrder<T>(this IQueryable<T> query, List<FilterOrder> filterOrderList)
        //{
        //    var isOrdered = false;

        //    foreach (var filterOrder in filterOrderList)
        //    {
        //        if (!isOrdered)
        //        {
        //            query = query.OrderByDynamic(filterOrder.Field, filterOrder.order);
        //            isOrdered = true;
        //        }
        //        else
        //            query = ((IOrderedQueryable<T>)query).ThenByDynamic(filterOrder.Field, filterOrder.order);
        //    }

        //    return query;
        //}

        //#region Methods Async

        //public static async Task<FindByFilter<T>> FindByFilterAsync<T>(this IQueryable<T> query, Filter filter, int pageNumber, int pageSize, CancellationToken ct = default)
        //{
        //    ct.ThrowIfCancellationRequested();
        //    query = query.ApplyFilter(filter);

        //    return await query.ExecutePaginatedAsync(pageNumber, pageSize, ct);
        //}

        //public static async Task<FindByFilter<T>> ExecutePaginatedAsync<T>(this IQueryable<T> query, int pageNumber, int pageSize, CancellationToken ct = default)
        //{
        //    ct.ThrowIfCancellationRequested();
        //    var dataCount = await query.CountAsync(ct);

        //    if (pageSize != 65536)
        //    {
        //        if (pageNumber > 1)
        //            query = query.Skip(pageSize * (pageNumber - 1));

        //        query = query.Take(pageSize);
        //    }

        //    return new FindByFilter<T> { QueryResult = query, Count = dataCount };
        //}

        //#endregion
    }

    public class FindByFilter<T>
    {

        public IQueryable<T> QueryResult { get; set; }

        public int Count { get; set; }

    }

}
